'use strict';

angular.module('linkedLadiesApp')
  .service('introFactory', function() {
    var intro = [
      {
        "id": 0,
        "image": "images/team.jpg",
        "title": "Linked Ladies",
        "paragraphs": [
          "The Linked Ladies build innovative software products that connect people together.",
          "In 2013, three young UC Irvine classmates formed an all-female team to complete in a small LA hackathon.",
          "Since then, the ladies continued to hack away at problems through creating innovative, full-stack applications, earning several honors and awards along the way. Based in the San Francisco Bay Area, the Linked Ladies create people-centered software solutions that engage and empower users."
        ]
      }
    ];
    this.getIntro = function(index) {
      return intro[index];
    };
  })
  .service('projectsFactory', function() {
    var projects = [
      {
        "id": 0,
        "title": "SnapMap",
        "imageClass": "snapmap-image",
        "summary": "A Better Way to Find Your Pictures",
        "description": "Our first app together was inspired by the overload of data on social media. We created SnapMap so users can find photos inuitively using location, tagged friends, or number of likes. We created the app in 24 hours and pitched and did a live demo of the app to a panel of venture capitalists for AppHack LA in 2013."
      },
      {
        "id": 1,
        "title": "Troop",
        "imageClass": "troop-image",
        "summary": "Fitness Encouragment & Support App",
        "description": "This was a fun project developed at the AT&T Hackathon that we planned to use after the hackathon. We developed an Android app using the Spotify API to listen to songs in real time while working out with your friends. ‘Troop’ connected us together to train for a half marathon even when we were physically far from each other, from SF to LA."
      },
      {
        "id": 2,
        "title": "Haven",
        "imageClass": "haven-image",
        "summary": "Cross-Platform Community Disaster Relief",
        "description": "'Haven' was inspired by the local wildfires in Napa Valley for TechCrunch Disrupt Hackathon in SF. We wanted to create a cross-device platform where a victim in an emergency disaster can bring awareness to their community to ultimately receive help. Once an incident is reported, the community is notified of a direct method to offer aid. First responders can locate those who need medical attention; a local neighbor can offer up their spare room for shelter."
      }
    ];
    this.getProject = function(index) {
      return projects[index];
    };
    this.getProjects = function() {
      return projects;
    }
  })
  .service('teamFactory', function() {
    var members = [
      {
        "id": 0,
        "name": "Jay Tolentino",
        "image": "images/jay.png",
        "designation": "Business Strategy & Engineering",
        "personality": "INFJ",
        "strengths": "Restorative, Futuristic, Belief, Achiever, Ideation",
        "links": [
          {
            "label": "LinkedIn",
            "url": "https://www.linkedin.com/in/jltolent"
          },
          {
            "label": "Website",
            "url": "http://jaytolentino.com/"
          }
        ]
      },
      {
        "id": 1,
        "name": "Kathy Nguyen",
        "image": "images/jay.png",
        "designation": "Product & Design",
        "personality": "ENFJ",
        "strengths": "Communication, Woo, Positivity, Ideation, Maximizer",
        "links": [
          {
            "label": "LinkedIn",
            "url": "https://www.linkedin.com/in/nguyenkatherine"
          },
          {
            "label": "Portfolio",
            "url": "http://kitkatdesign.com/"
          }
        ]
      },
      {
        "id": 2,
        "name": "Melody Truong",
        "image": "images/jay.png",
        "designation": "Engineering",
        "personality": "ESFJ",
        "strengths": "Restorative, Developer, Achiever, Learner, Arranger",
        "links": [
          {
            "label": "LinkedIn",
            "url": "https://www.linkedin.com/in/truongmm"
          },
          {
            "label": "Github",
            "url": "https://github.com/truongmm"
          }
        ]
      }
    ];
    this.getMember = function(index) {
      return members[index];
    };
    this.getMembers = function() {
      return members;
    }
  });