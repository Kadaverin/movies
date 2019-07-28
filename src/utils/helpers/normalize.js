export const normalize = (list, key = 'id') => {
  return list.reduce(
    (res, item) => {
      res.entities[item[key]] = item;
      res.ids.push(item[key]);

      return res;
    },
    {
      entities: {},
      ids: [],
    },
  );
};
