import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';


const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();  // get the navigate function

  const handleDelete = () => {
    deleteRecipe(recipeId);       // remove recipe from store
    navigate('/');                // go back to the homepage or recipe list
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
