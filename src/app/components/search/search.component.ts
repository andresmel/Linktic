import { Component, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() textSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() textRegion:EventEmitter<string> = new EventEmitter<string>()
  constructor(){}

  searchPaises(e:Event){
  const text=e.target as HTMLInputElement;
  console.log(text.value);
  this.textSearch.emit(text.value);
  }

  searchRegion(e:Event){
   const text=e.target as HTMLInputElement;
   this.textRegion.emit(text.value);
  }
}
