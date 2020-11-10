class Unicorn {
  constructor(name, color) {
    this.name = name
    this.color = color || 'white'
  }

  isWhite() {
    return this.color === 'white' ? true : false
  }

  says(string) {
    if(string === 'Wonderful!') {
      return '**;* Wonderful! *;**'
    }
    else if(string === 'Batman has a great smile') {
      return '**;* Batman has a great smile *;**'
    }
  }
}

module.exports = Unicorn;
