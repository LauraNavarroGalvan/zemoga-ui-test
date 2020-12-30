import { Candidate } from './../models/candidate';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  candidates: Candidate[];

  constructor(private httpClient: HttpClient) { }

  getCandidates() {
    return new Promise((resolve) => {
      const loadCandidates = JSON.parse(localStorage.getItem('candidates'));
      if (loadCandidates) {
        this.candidates = loadCandidates;
        return resolve(this.candidates)
      }
      else {
        this.httpClient.get("assets/json/candidates.json").subscribe(data => {
          this.candidates = data['candidates']
          localStorage.setItem('candidates', JSON.stringify(this.candidates));
          return resolve(this.candidates)
        })
      }
    });
  }

  setNewVote(index, value) {
    return new Promise((resolve) => {
      let candidate = this.candidates[index];
      candidate.totalVotes += 1;
      if (value == 'positive') {
        candidate.positiveVotes += 1;
      } else {
        candidate.negativeVotes += 1;
      }
      this.candidates[index] = candidate;
      localStorage.setItem('candidates', JSON.stringify(this.candidates));
      resolve(candidate)
    });
  }

}
