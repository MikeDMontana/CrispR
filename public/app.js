
  
  var Ingredients = React.createClass({

    getInitialState: function (){
      return {data: []}

    loadIngredientsFromServer: function(recipe){
          console.log(this.state),
          $.ajax({
            url: this.props.url + recipe.foodItem,
            dataType: 'json',
            cache: false,
            success:function(data){
              console.log("ingredient success")
              this.setState({data:data});
            }.bind(this),
            error: function(xhr, status, err){
              console.log("broken" + this.props.url)
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });

        },

    render: function() {
      var yumIngredients = 
      (
            <div>
              
            </div>
      );

          return !this.props.show ? <div/> : (
                <div>
                  {yumIngredients}
                </div>
          );
    }
  })
    

var RecipeList = React.createClass({

  render: function() {
    var recipeData = this.props.data.map(function(r) { 
      return ( 
        <div>
          <Recipe r={r}/>
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

var RecipeForm = React.createClass({
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
                <RecipeForm onRecipeSubmit={this.loadRecipesFromServer}/>
                <RecipeList data={this.state.data}/>
              </div>
            );
        }
    });

    var Recipe  = React.createClass({
        getInitialState: function() {
          return {liked: false};
        },

        handleClick: function(event) {
          this.setState({liked: !this.state.liked});
        },

        
        render: function() {
          // var self = this;
          var text = this.state.liked ? 'Hide Ingredients' : 'Show Ingredients';
          return (
            <div>
              <div className="col-md-6 col-sx-10 col-sm-8 col-lg-4 col-xs-offset-1" id="panel-spacing">
                <div className="panel panel-default" id="panel">
                  <div className="panel-heading" id="panel-heading">
                    <h6 className="panel-title"><a href={this.props.r.source_url}> {this.props.r.title} </a></h6>
                  </div>
                  <div className="panel-body">
                    <li> <img src={this.props.r.image_url} id="thumbnail"/> </li>
                  </div>
                  <div>
                    <button onClick= {this.handleClick} type="button" className="btn btn-default">{text}</button>
                  </div>
                </div>
              </div>
              <Ingredients show={this.state.liked}/>
            </div>
          );
        }
    });


React.render(<RecipeBox url="/api/recipes/"/>, document.getElementById('searchBar'));






   




