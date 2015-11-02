var App = React.createClass({

    getInitialState: function() {
        return {ingredients: false, recipes: false};
    },

    handleIngredients: function(event) {
          console.log('---')
        this.setState({ingredients: !this.state.ingredients});
    },
    handleRecipes: function(event) {
        this.setState({recipes: !this.state.recipes});
    },
    render: function() {
        var recipesText = this.state.recipes ? <AllRecipes handleIngredients={this.handleIngredients}/> : "";
        var ingredientsText = this.state.ingredients ? <Ingredients /> : "";
        return (
        <div>
        <h1>Crisper searching stuff</h1>
           <button onClick={this.handleRecipes} type="button" className="btn btn-default">Search for Chicken</button> 
              {recipesText}                 
                  {ingredientsText}
            </div>
        );
    }
  })  

  var AllRecipes = React.createClass({
  
      render: function() {
        var ingredients = this.props.ingredients ? <Ingredients/> : null;
          return (
            <div>
              <li> <h1> I am Recipes!!! </h1>
                    <ul>chicken 1</ul>
                    <ul>chicken 2</ul>
                    <ul>checkin 3</ul>
              </li>
              <button onClick={this.props.handleIngredients} type="button" className="btn btn-default">Display Ingredients</button>
              {ingredients}
            </div>
          );
      }
  })
  
  var Ingredients = React.createClass({
        render: function() {
          var text = (<div>
                    <h1> I am Ingredients </h1>
                          <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                          </ul>
                    </div>);

            return (
                  <div>
                    {text}
                    </div>
            );
        }
    });   

var AllReturnedRecipes = React.createClass({
  render: function() {
     var recipeData = this.props.data.map(function(r){
      console.log(r)
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
})

var SearchField = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var foodItem = React.findDOMNode(this.refs.foodItem).value.trim();
    this.props.onRecipeSubmit({foodItem:foodItem});
    console.log(foodItem)
  },
        render: function() {
            return (
              <div>
                  <form>
                      <h1 id="topOfList">Find Your Food:</h1>
                      <input type="text" ref= "foodItem" className="" id="userText" placeholder="        Ingredients"/>
                    <div>
                      <button onClick={ this.handleSubmit } id="searchButton" className="btn btn-success">Get Recipes</button>
                    </div>
                  </form>
              </div>
            );
        }
    });

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
        render: function() {
            return (
              <div>
                <SearchField onRecipeSubmit={this.loadRecipesFromServer}/>
                <AllReturnedRecipes data={this.state.data}/>
                <App/>
              </div>
            );
        }
    });

React.render(<RecipeBox url="/api/recipes/"/>, document.getElementById('searchBar'));






   




