interface CitationErrorInterface {
  citation: string,
  errors: string[],
  citationSection: number,
  citationIndex: number
}

export class CitationError implements CitationErrorInterface {
  citation: string;
  errors!: string[];
  citationSection!: number;
  citationIndex!: number;
  
  constructor(citation: string) {
    this.citation = citation;
  }
  
  getCitation() {
    return this.citation;
  }
  
  setCitation(citation: string) {
    this.citation = citation;
  }
  
  getCitationErrors() {
    return this.errors;
  }
  
  setCitationErrors(errors: string[]) {
    this.errors = errors;
  }
  
  getCitationSection() {
    return this.citationSection;
  }
  
  setCitationSection(newCitationSection: number) {
    this.citationSection = newCitationSection;
  }
  
  getCitationIndex() {
    return this.citationIndex;
  }
  
  setCitationIndex(newCitationIndex: number) {
    this.citationIndex = newCitationIndex;
  }
  
}