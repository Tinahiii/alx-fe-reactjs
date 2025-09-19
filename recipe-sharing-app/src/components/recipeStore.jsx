import create from 'zustand';

// Create Zustand store
export const useRecipeStore = create((set) => ({
  recipes: [],

  // Action to add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action to initialize/set recipes
  setRecipes: (recipes) => set({ recipes }),
}));
