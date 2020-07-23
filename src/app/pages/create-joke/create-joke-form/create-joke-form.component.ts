import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CategoryInterface,
  PostJokeInterface,
  Joke
} from 'src/app/interfaces/interfaces';
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
      value: ['', [Validators.required, Validators.minLength(3)]],
      iconUrl: [''],
      categories: [[]]
    });
  }

  submit(): void {
    this.errorMessage.emit('');
    this.loading = true;

    const categories = [...this.form.get('categories').value];
    const newJoke: PostJokeInterface = {
      ...this.form.value,
      categories: this.mapCategories(categories)
    };

    this.jokesDataService
      .postJoke(newJoke)
      .subscribe(
        joke => {
          this.createNewJoke(joke);
        },
        () => this.errorMessage.emit('Something went wrong...')
      )
      .add(() => {
        this.loading = false;
      });
  }

  createNewJoke(joke: Joke): void {
    this.jokeService.createJoke(joke);
    this.form.reset();
    this.form.get('categories').setValue([]);
  }

  mapCategories(categories: string[]): number[] {
    return categories.reduce((acc: number[], curr: string) => {
      const id = this.categoriesList.find(i => i.title === curr).id;
      acc.push(id);
      return acc;
    }, []);
  }
}