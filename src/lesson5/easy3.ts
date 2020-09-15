// Задание первого уровня 3
// Есть общая функция omit которая удаляет поле из объекта и возвращает его без этого поля
// Нужно заменить FIXME на соответствующий тип

type FIXME<T> = Omit<T, keyof T>;

export const omit = <T extends Record<any, any>, K extends keyof T>(
	obj: T,
	keyToOmit: K,
): FIXME<T> => {
	const { [keyToOmit]: _, ...withoutKey } = obj;
	return withoutKey;
};
