// Hash table -> key: value pair
let user = {
    age: 54,
    name: 'Lylie',
    magic: true,
    scream: function() {
        console.log('ahhhhh!')
    }
}

// Making my own hash table
class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
        this.data[this._hash(key)] = [key, value];
    }

    get(key) {
        return this.data[this._hash(key)][1];
    }

  }
  
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')

console.log(myHashTable.get('grapes'))