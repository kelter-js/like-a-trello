type Item = {
  id: string;
}

export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: Item) => item.id === id);
}

export const removeItemAtIndex = <T>(array: T[], index: number) => {
  return [...array.slice(0, index), array.slice(index + 1)];
}