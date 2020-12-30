import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  candidates = [
    {
      image: "url(../../../assets/img/keny.png)",
      name: "Kanye West",
      category: "Entertainment",
      description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
      positiveVotes: 64,
      negativeVotes: 36
    },
    {
      image: "url(../../../assets/img/Mark.png)",
      name: "Mark Zuckerberg",
      category: "Business",
      description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
      positiveVotes: 36,
      negativeVotes: 64
    },
    {
      image: "url(../../../assets/img/cristina.png)",
      name: "Cristina Fernández de Kirchner",
      category: "Politics",
      description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
      positiveVotes: 36,
      negativeVotes: 64
    },
    {
      image: "url(../../../assets/img/malala.png)",
      name: "Malala Yousafzai",
      category: "Entertainment",
      description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
      positiveVotes: 64,
      negativeVotes: 36
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
