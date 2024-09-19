export interface IngredientType {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

export interface IngredientConstructorType extends IngredientType{
    key: string;
}

interface IIngredientsConstructorType {
    bun: IngredientType | null;
    ingredients: IngredientConstructorType[] ;
}

interface IViewIngredientsAllType {
    ingredients: IngredientType[];
    loading: boolean;
    error: string;
}

interface IUserType {
    user: {
        email: string, 
        name: string,
    },
isAuthChecked: boolean,
loading: boolean,
error: string,
}

interface IIngredientDetailsType {
    ingredient: IngredientType;
}

interface IOrderNumberType {
    order: string;
    loading: boolean;
    error: string;
}

export interface IStoreType {
    ingredientsConstructor: IIngredientsConstructorType;
    viewIngredientsAll: IViewIngredientsAllType;
    user: IUserType;
    ingredientDetails: IIngredientDetailsType;
    orderNumber: IOrderNumberType;
}
