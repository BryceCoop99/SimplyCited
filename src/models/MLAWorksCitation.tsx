interface MLAWorksCitationInterface {
  secIndex: number,
  worksCitation: string,
  worksCitationErrors: string[],
  author: string,
  authorErrors: string[],
  authorIndex: number,
  authorAcronym: string,
  titleSource: string,
  titleSourceErrors: string[],
  titleSourceIndex: number,
  titleContainer: string,
  titleContainerErrors: string[],
  titleContainerIndex: number,
  contributors: string,
  contributorsErrors: string[],
  contributorsIndex: number,
  version: string,
  versionErrors: string[],
  versionIndex: number,
  publisher: string,
  publisherErrors: string[],
  publisherIndex: number,
  publicationDate: string,
  publicationDateErrors: string[],
  publicationDateIndex: number,
  aLocation: string,
  locationErrors: string[],
  locationIndex: number
}
export class MLAWorksCitation implements MLAWorksCitationInterface {
  /** 
  * Author, Title of source, Title of container, Other contributors
  * Version, Number, Publisher, Publication date, Location.
  * 
  * REMEMBER that in this class specifically,
  * the indexes for everything other than the works cited section index
  * is the index of the sentence! NOT the index of the character as in other
  * classes.
  */
  secIndex: number;
  worksCitation: string;
  worksCitationErrors!: string[];
  author!: string;
  authorErrors!: string[];
  authorIndex!: number;
  authorAcronym!: string;
  titleSource!: string;
  titleSourceErrors!: string[];
  titleSourceIndex!: number;
  titleContainer!: string;
  titleContainerErrors!: string[];
  titleContainerIndex!: number;
  contributors!: string;
  contributorsErrors!: string[];
  contributorsIndex!: number;
  version!: string;
  versionErrors!: string[];
  versionIndex!: number;
  publisher!: string;
  publisherErrors!: string[];
  publisherIndex!: number;
  publicationDate!: string;
  publicationDateErrors!: string[];
  publicationDateIndex!: number;
  aLocation!: string;
  locationErrors!: string[];
  locationIndex!: number;


  constructor(worksCitation: string, secIndex: number) {
    this.worksCitation = worksCitation;
    this.secIndex = secIndex;
  }
  
  getSectionIndex() {
    return this.secIndex;
  }
  
  setSectionIndex(secIndex: number) {
    this.secIndex = secIndex;
  }
  
  getWorksCitation() {
    return this.worksCitation;
  }
  
  setWorksCitation(worksCitation: string) {
    this.worksCitation = worksCitation;
  }
  
  getWorksCitationErrors() {
    return this.worksCitationErrors;
  }
  
  setWorksCitationErrors(worksCitationErrors: string[]) {
    this.worksCitationErrors = worksCitationErrors;
  }
  
  getAuthor() {
    return this.author;
  }
  
  setAuthor(author: string) {
    this.author = author;
  }
  
  getAuthorErrors() {
    return this.authorErrors;
  }
  
  setAuthorErrors(authorErrors: string[]) {
    this.authorErrors = authorErrors;
  }
  
  getAuthorIndex() {
    return this.authorIndex;
  }
  
  setAuthorIndex(authorIndex: number) {
    this.authorIndex = authorIndex;
  }
  
  getAuthorAcronym() {
    return this.authorAcronym;
  }
  
  setAuthorAcronym(authorAcronym: string) {
    this.authorAcronym = authorAcronym;
  }
  
  getTitleSource() {
    return this.titleSource;
  }
  
  setTitleSource(titleSource: string) {
    this.titleSource = titleSource;
  }
  
  getTitleSourceErrors() {
    return this.titleSourceErrors;
  }
  
  setTitleSourceErrors(titleSourceErrors: string[]) {
    this.titleSourceErrors = titleSourceErrors;
  }
  
  getTitleSourceIndex() {
    return this.titleSourceIndex;
  }
  
  setTitleSourceIndex(titleSourceIndex: number) {
    this.titleSourceIndex = titleSourceIndex;
  }
  
  getTitleContainer() {
    return this.titleContainer;
  }
  
  setTitleContainer(titleContainer: string) {
    this.titleContainer = titleContainer;
  }
  
  getTitleContainerErrors() {
    return this.titleContainerErrors;
  }
  
  setTitleContainerErrors(titleContainerErrors: string[]) {
    this.titleContainerErrors = titleContainerErrors;
  }
  
  getTitleContainerIndex() {
    return this.titleContainerIndex;
  }
  
  setTitleContainerIndex(titleContainerIndex: number) {
    this.titleContainerIndex = titleContainerIndex;
  }
  
  getContributors() {
    return this.contributors;
  }
  
  setContributors(contributors: string) {
    this.contributors = contributors;
  }
  
  getContributorsErrors() {
    return this.contributorsErrors;
  }
  
  setContributorsErrors(contributorsErrors: string[]) {
    this.contributorsErrors = contributorsErrors;
  }
  
  getContributorsIndex() {
    return this.contributorsIndex;
  }
  
  setContributorsIndex(contributorsIndex: number) {
    this.contributorsIndex = contributorsIndex;
  }
  
  getVersion() {
    return this.version;
  }
  
  setVersion(version: string) {
    this.version = version;
  }
  
  getVersionErrors() {
    return this.versionErrors;
  }
  
  setVersionErrors(versionErrors: string[]) {
    this.versionErrors = versionErrors;
  }
  
  getVersionIndex() {
    return this.versionIndex;
  }
  
  setVersionIndex(versionIndex: number) {
    this.versionIndex = versionIndex;
  }
  
  getPublisher() {
    return this.publisher;
  }
  
  setPublisher(publisher: string) {
    this.publisher = publisher;
  }
  
  getPublisherErrors() {
    return this.publisherErrors;
  }
  
  setPublisherErrors(publisherErrors: string[]) {
    this.publisherErrors = publisherErrors;
  }
  
  getPublisherIndex() {
    return this.publisherIndex;
  }
  
  setPublisherIndex(publisherIndex: number) {
    this.publisherIndex = publisherIndex;
  }
  
  getPublicationDate() {
    return this.publicationDate;
  }
  
  setPublicationDate(publicationDate: string) {
    this.publicationDate = publicationDate;
  }
  
  getPublicationDateErrors() {
    return this.publicationDateErrors;
  }
  
  setPublicationDateErrors(publicationDateErrors: string[]) {
    this.publicationDateErrors = publicationDateErrors;
  }
  
  getPublicationDateIndex() {
    return this.publicationDateIndex;
  }
  
  setPublicationDateIndex(publicationDateIndex: number) {
    this.publicationDateIndex = publicationDateIndex;
  }
  
  getLocation() {
    return this.aLocation;
  }
  
  setLocation(aLocation: string) {
    this.aLocation = aLocation;
  }
  
  getLocationErrors() {
    return this.locationErrors;
  }
  
  setLocationErrors(locationErrors: string[]) {
    this.locationErrors = locationErrors;
  }
  
  getLocationIndex() {
    return this.locationIndex;
  }
  
  setLocationIndex(locationIndex: number) {
    this.locationIndex = locationIndex;
  }
  
}