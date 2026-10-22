export const drivewayComparisonColumns = [
  {
    "key": "resinBound",
    "label": "Resin-bound system"
  },
  {
    "key": "looseGravel",
    "label": "Loose gravel"
  },
  {
    "key": "pavers",
    "label": "Pavers"
  },
  {
    "key": "concrete",
    "label": "Concrete options"
  }
];

export const drivewayComparisonRows = [
  {
    "feature": "Published installed cost / sq. ft.",
    "resinBound": {
      "value": "$12–$25",
      "sources": [
        1
      ]
    },
    "looseGravel": {
      "value": "$1–$3",
      "sources": [
        2
      ]
    },
    "pavers": {
      "value": "$10–$30",
      "sources": [
        3
      ]
    },
    "concrete": {
      "value": "$4–$15",
      "sources": [
        2
      ]
    }
  },
  {
    "feature": "Illustrative 600 sq. ft. budget",
    "resinBound": {
      "value": "$7,200–$15,000",
      "sources": [
        1
      ]
    },
    "looseGravel": {
      "value": "$600–$1,800",
      "sources": [
        2
      ]
    },
    "pavers": {
      "value": "$6,000–$18,000",
      "sources": [
        3
      ]
    },
    "concrete": {
      "value": "$2,400–$9,000",
      "sources": [
        2
      ]
    }
  },
  {
    "feature": "Published service-life guidance",
    "resinBound": {
      "value": "15+ years",
      "sources": [
        1
      ]
    },
    "looseGravel": {
      "value": "20+ years*",
      "sources": [
        2
      ]
    },
    "pavers": {
      "value": "25–50 years",
      "sources": [
        4
      ]
    },
    "concrete": {
      "value": "20–30+ years",
      "sources": [
        2
      ]
    }
  },
  {
    "feature": "Vehicle-use waiting guidance after placement",
    "resinBound": {
      "value": "24–48 hours†",
      "sources": [
        1
      ]
    },
    "looseGravel": {
      "value": "0 curing hours‡",
      "sources": [
        6
      ]
    },
    "pavers": {
      "value": "0 curing hours‡",
      "sources": [
        5
      ]
    },
    "concrete": {
      "value": "About 7 days†",
      "sources": [
        5
      ]
    }
  }
];

export const drivewayComparisonSources = [
  {
    "id": 1,
    "label": "Resin Rock: resurfacing prices, service-life claim, and opening guidance",
    "url": "https://resinrock.com/pages/concrete-resurfacing"
  },
  {
    "id": 2,
    "label": "Angi: gravel and conventional concrete driveway comparison",
    "url": "https://www.angi.com/articles/gravel-vs-concrete-driveway.htm"
  },
  {
    "id": 3,
    "label": "Angi: installed paver driveway costs",
    "url": "https://www.angi.com/articles/paver-driveway-cost.htm"
  },
  {
    "id": 4,
    "label": "Gerrior Masonry: concrete-paver service-life guidance",
    "url": "https://gerriormasonry.com/durable-driveway-pavers-complete-guide/"
  },
  {
    "id": 5,
    "label": "Concrete Network: vehicle access for poured concrete and pavers",
    "url": "https://www.concretenetwork.com/concrete/concrete_driveways/how-long-before-you-can-drive-on-concrete.html"
  },
  {
    "id": 6,
    "label": "Drivewayz USA: gravel access after installation and compaction",
    "url": "https://drivewayzusa.co/guides/when-can-you-drive/"
  }
];
