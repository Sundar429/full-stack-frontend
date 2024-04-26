export const categorizeIngredients=(ingredients)=>{
    return ingredients.reduce((acc,ingredient)=>{
        const{category}=ingredient;
        if (!category) {
            console.log("Undefined category for ingredient:", ingredient);
        } else {
        if (!acc[category.name]) {
            acc[category.name]=[];
            
        }
        acc[category.name].push(ingredient);
    }
        return acc
    },{})
}