import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemResponse } from '../../interfaces/response.interfaces';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AudioApiService } from '../../services/audio-api.service';

const whiteSpaceRegex = /\s+/g;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  protected dataSource: ItemResponse[] = [];
  protected columnsToDisplay = ['id', 'name', 'fileName'];
  protected columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  protected expandedElement: ItemResponse | null = null;

  public constructor(private audioApiService: AudioApiService) { }

  public ngOnInit() {
    this.subscription = this.audioApiService.getTracks(10).subscribe({
      next: (data) => {
        this.dataSource = data.results.map((track) => ({
          ...track,
          fileName: `${track.name.replace(whiteSpaceRegex, '_')}_-_${track.artist_idstr.replace(whiteSpaceRegex, '_')}.mp3`
        }));
      },
      error: (err) => {
        console.log(err.message)
      }
    })
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
