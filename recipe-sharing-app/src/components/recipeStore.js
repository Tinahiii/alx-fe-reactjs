import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],         // your existing recipes state
  searchTerm: '',      // new search term state
  setSearchTerm: (term) => set({ searchTerm: term }), // action to update search term

  filteredRecipes: [], // optional: for storing filtered results
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // existing actions
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  setRecipes: (recipes) => set({ recipes }),
}));
