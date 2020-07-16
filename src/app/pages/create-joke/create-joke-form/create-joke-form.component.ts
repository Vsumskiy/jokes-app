import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CategoryInterface,
  PostJokeInterface
} from 'src/app/interfaces/interfaces';
import { PostJokeEnum } from 'src/app/enums/enums';
import { JokeService } from 'src/app/services/joke.service';
import { JokesDataService } from 'src/app/services/jokes-data.service';

@Component({
  selector: 'app-create-joke-form',
  templateUrl: './create-joke-form.component.html',
  styleUrls: ['./create-joke-form.component.scss'],
  providers: [JokesDataService]
})
export class CreateJokeFormComponent implements OnInit {
  public form: FormGroup;
  public loading = false;
  public postJokeEnum = PostJokeEnum;

  @Output() loadingChanged = new EventEmitter<boolean>();
  @Output() errorMessage = new EventEmitter<string>();

  categoriesList: CategoryInterface[] = [];
  constructor(
    private jokesDataService: JokesDataService,
    private fb: FormBuilder,
    private jokeService: JokeService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.setForm();
  }

  getCategories(): void {
    this.jokesDataService.fetchCategories().subscribe(data => {
      this.categoriesList = [...data];
    });
  }

  setForm(): void {
    this.form = this.fb.group({
      [this.postJokeEnum.Value]: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],
      [this.postJokeEnum.Url]: [''],
      [this.postJokeEnum['Icon Url']]: [''],
      [this.postJokeEnum.Categories]: [[]]
    });
  }

  submit(): void {
    this.errorMessage.emit('');
    this.loadingChanged.emit(true);
    this.loading = true;

    const categories = [...this.form.get(this.postJokeEnum.Categories).value];
    const joke: PostJokeInterface = {
      ...this.form.value,
      categories: this.mapCategories(categories)
    };

    this.jokesDataService
      .postJoke(joke)
      .subscribe(
        data => {
          this.jokeService.createJoke(data);
          this.form.reset();
          this.form.get(this.postJokeEnum.Categories).setValue([]);
        },
        () => this.errorMessage.emit('Something went wrong...')
      )
      .add(() => {
        this.loading = false;
        this.loadingChanged.emit(false);
      });
  }

  mapCategories(categories: string[]): number[] {
    return categories.reduce((acc: number[], curr: string) => {
      const id = this.categoriesList.find(i => i.title === curr).id;
      acc.push(id);
      return acc;
    }, []);
  }
}
