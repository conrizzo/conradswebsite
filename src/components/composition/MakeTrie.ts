


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
  

    print(node = this.root, word = '', words: string[] = []): string[] {
      if (node.end) {
        words.push(word);
      }

      for (const key in node.children) {
        this.print(node.children[key], word + key, words);
      }

      return words;
    }
  }
  
  //let trie = new Trie();
  //trie.insert("hello");
  //console.log(trie.search("hello")); // true
  //console.log(trie.search("hell")); // false