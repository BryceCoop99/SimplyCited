interface DocumentErrorInterface {
  error: string,
  type: string,
  secIndex: number,
  index: number
}

export class DocumentError implements DocumentErrorInterface {
  error: string;
  type: string;
  secIndex: number;
  index: number;

  constructor(error: string, type: string, secIndex: number, index: number) {
    this.error = error;
    this.secIndex = secIndex;
    this.index = index;
    this.type = type;
  }
  
  getError() {
    return this.error;
  }
  
  getType() {
    return this.type;
  }
  
  getSection() {
    return this.secIndex;
  }
  
  getIndex() {
    return this.index;
  }
}