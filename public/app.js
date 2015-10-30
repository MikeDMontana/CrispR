var App = React.createClass({

    getInitialState: function() {
        return {ingredients: false, recipes: false};
    },

    handleIngredients: function(event) {
        this.setState({ingredients: !this.state.ingredients});
    },
    handleRecipes: function(event) {
        this.setState({recipes: !this.state.recipes});
    },
      displayRecipes: function(e){
      e.preventDefault();
      var foodItem = React.findDOMNode(this.refs.foodItem).value.trim();
      this.props.onRecipeSubmit({foodItem:foodItem});
    },
    render: function() {
        var recipesText = this.state.recipes ? <AllRecipes handleIngredients={this.handleIngredients}/> : "";
        var ingredientsText = this.state.ingredients ? <Ingredients /> : "";
          return (
              <div>
                  <form>
                      <h1 id="topOfList">Find Your Food:</h1>
                      <input type="text" ref= "foodItem" className="" id="userText" placeholder="        Ingredients"/>
                    <div>
                      <button onClick={ this.displayRecipes } id="searchButton" className="btn btn-success">Get Recipes</button>
                    </div>
                  </form>
              </div>
            );
    }
  }),  

var RecipeBox = React.createClass({

  getInitialState: function (){
    return {data: []}
  },

    loadRecipesFromServer: function(recipe){
      console.log(this.state),
      $.ajax({
        url: this.props.url + recipe.foodItem,
        dataType: 'json',
        cache: false,
        success:function(data){
          console.log("recipe success")
          this.setState({data:data});
        }.bind(this),
        error: function(xhr, status, err){
          console.log("broken" + this.props.url)
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });

    },

    loadIngredientsFromServer: function(rId){
      $.ajax({
        url: this.props.url2 + rId,
        dataType: 'json',
        cache: false,
        success:function(data){

          console.log("ingredient success")
          this.setState({data:data});
        }.bind(this),
        error: function(xhr, status, err){
          console.log("broken " + this.props.url)
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });

    },
    
        render: function() {
            return (
              <div>
                <RecipeForm onRecipeSubmit={this.loadRecipesFromServer} />
                <RecipeList data={this.state.data}/>
                <IngredientList onRecipeSubmit={this.loadIngredientsFromServer} />
              </div>
            );
        }
    }),

var RecipeForm = React.createClass({
  
        render: function() {
            
        }
    });

// this is the displayed recipe list ---------------------
var RecipeList = React.createClass({
  render: function() {
     var recipeData = this.props.data.map(function(r){
      return ( 
        <div>
          <div className="col-md-6 col-sx-10 col-sm-8 col-lg-4 col-xs-offset-1" id="panel-spacing">
            <div className="panel panel-default" id="panel">
              <div className="panel-heading" id="panel-heading">
                <h6 className="panel-title"><a href={r.source_url}> {r.title} </a></h6>
              </div>
              <div className="panel-body">
                <li> <img src={r.image_url} id="thumbnail"/> </li>
              </div>
            </div>
          </div>
        </div>
      );   
})

    return (
      <div>
        <div className="col-md-12 text-center">
            <ul>
                {recipeData} 
            </ul>
        </div>
      </div>
    );
  }
}),





React.render(<App url="/api/recipes/" url2="/api/recipe/"/>, document.getElementById('searchBar'));






   




