


class TrieNode {
    end: boolean;
    children: { [key: string]: TrieNode };
  
    constructor() {
      this.end = false;
      this.children = {};
    }
  }
  
export class Trie {
    root: TrieNode;
  
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word: string): void {
      let node = this.root;
      for(let i = 0; i < word.length; i++) {
        if(!node.children[word[i]]) {
          node.children[word[i]] = new TrieNode();
        }
        node = node.children[word[i]];
      }
      node.end = true;
    }
  
    search(word: string): boolean {
      let node = this.root;
      for(let i = 0; i < word.length; i++) {
        if(!node.children[word[i]]) {
          return false
        }
        node = node.children[word[i]];
      }
      return node.end;
    }   
  

    print(node = this.root, word = ''): void {
      for (const key in node.children) {
        /*
        if (node.children[key].end) {
          console.log("print",word + key);
        }*/
        this.print(node.children[key], word + key);
      }
    }
  }
  
  //let trie = new Trie();
  //trie.insert("hello");
  //console.log(trie.search("hello")); // true
  //console.log(trie.search("hell")); // false