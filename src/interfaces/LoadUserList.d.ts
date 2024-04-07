export interface LoadUserList<I> {
  loadAll: () => Promise<I>;
}
