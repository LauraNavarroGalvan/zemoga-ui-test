import { VoteDialogComponent } from './../../shared/components/vote-dialog/vote-dialog.component';
import { Candidate } from './../../shared/models/candidate';
import { CandidatesService } from './../../shared/services/candidates.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  candidates: Candidate[];


  constructor(private candidatesService: CandidatesService, public dialog: MatDialog) {
    this.getCandidates();
  }

  ngOnInit(): void { }


  getCandidates() {
    this.candidatesService.getCandidates().then((candidates: Candidate[]) => {
      candidates.forEach(candidate =>{
        candidate.hasVoted = false;
        candidate.vote = undefined;
      });
      this.candidates = candidates
    });
  }


  vote(index, value) {
    this.candidatesService.setNewVote(index, value).then((candidate: Candidate) => {
      this.candidates[index] = candidate;
      this.openDialog(index);
    })
  }

  voteAgain(index){
    this.candidates[index].hasVoted = false;
    this.candidates[index].vote = undefined;
  }

  getPercentageVote(votes: number, totalVotes: number) {
    return (votes * 100) / totalVotes
  }

  openDialog(index) {
    const dialogRef = this.dialog.open(VoteDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.candidates[index].hasVoted = true;
    });
  }

}
