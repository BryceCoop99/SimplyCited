interface QuoteInterface {
  quote: string,
  quoteErrors: string[],
  citation: string,
  citationErrors: string[],
  quoteSection: number,
  quoteIndex: number,
  citationSection: number,
  citationIndex: number
}

export class Quote implements QuoteInterface {
  quote!: string;
  quoteErrors!: string [];
  citation!: string;
  citationErrors!: string[];
  quoteSection!: number;
  quoteIndex!: number;
  citationSection!: number;
  citationIndex!: number;
  
  constructor(quote: string = "") {
    this.quote = quote;
  }
  
  getQuote() {
    return this.quote;
  }
  
  setQuote(newQuote: string) {
    this.quote = newQuote;
  }
  
  getQuoteErrors() {
    return this.quoteErrors;
  }
  
  setQuoteErrors(errors: string[]) {
    this.quoteErrors = errors;
  }
  
  getCitation() {
    return this.citation;
  }
  
  setCitation(newCitation: string) {
    this.citation = newCitation;
  }
  
  getCitationErrors() {
    return this.citationErrors;
  }
  
  setCitationErrors(errors: string[]) {
    this.citationErrors = errors;
  }
  
  // Possibly?
  getQuoteSection() {
    return this.quoteSection;
  }
  
  setQuoteSection(newQuoteSection: number) {
    this.quoteSection = newQuoteSection;
  }
  
  getQuoteIndex() {
    return this.quoteIndex;
  }
  
  setQuoteIndex(newQuoteIndex: number) {
    this.quoteIndex = newQuoteIndex;
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