//forma de deixar uma propriedade opcional no construtor usando sua tipagem original
export type Replace<T, R> = Omit<T, keyof R> & R;