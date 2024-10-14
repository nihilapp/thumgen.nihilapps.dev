export const userKeys = {
  list: [ 'users', 'list', ],
  recentList: [ 'users', 'list', 'recent', ],
  detailId: (id: number) => [ 'users', 'detail', id, ],
  searchEmail: (email: string) => [ 'users', 'search', email, ],
  searchName: (name: string) => [ 'users', 'search', name, ],
};
