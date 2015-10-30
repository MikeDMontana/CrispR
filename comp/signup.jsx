		var App = React.createClass({
		    render: function() {
		        return (
		          <div>
		              <nav className="navbar navbar-inverse navbar-fixed-top animate">
					      <nav className="navbar navbar-inverse">
					        <div className="navbar-brand navbar-brand navbar-left" id="brand">Crisp&#1071</div>
					          <div className="container">
					        
					            <div className="navbar-header">
					              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-3">
					                <span className="sr-only">Toggle navigation</span>
					                <span className="icon-bar"></span>
					                <span className="icon-bar"></span>
					                <span className="icon-bar"></span>
					              </button>
					            </div> 
					    
					          <div className="collapse navbar-collapse" id="navbar-collapse-3">
					            <ul className="nav navbar-nav navbar-right" id="navList">
					              <li id="navButtons"><a href="/">Home</a></li>
					              <li id="navButtons"><a href="#">Recipes</a></li>
					              <li id="navButtons"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Log In<b className="caret"></b></a>
					                <ul className="dropdown-menu multi-level">    
					                  <li id="navButtons"><a href="/login">Log In</a></li>
					                  <li id="navButtons"><a href="#">Sign Out </a></li>
					                </ul>
					              </li>
					                <li id="navButtons"><a href="#">Contact Us</a></li>
					            </ul>
					          </div> 
					        </div> 
					      </nav> 
					    </nav> 


					      <div className="row">
					           <div className="col-md-12 panel" id="secondStripe">
					           </div>
					      </div>


					  <br/>
					      <div className="container">
					        <div className="col-md-3"></div>
					          <div className="col-md-6">
					            <div className="row myborder">
					              <form action="/signup" method="post">
					                <h4 style="color: #A3CE0C ; margin: initial; margin-bottom: 10px;">Sign Up Now</h4><hr>
					                  <!-- <div className="input-group margin-bottom-20">
					                     <span className="input-group-addon"><i className="glyphicon glyphicon-queen mycolor"></i></span>
					                     <input size="60" maxlength="255" className="form-control" placeholder="First Name" name="UserRegistration[fname]" id="UserRegistration_fname" type="text">                                    </div>
					                  <div className="input-group margin-bottom-20">
					                     <span className="input-group-addon"><i className="glyphicon glyphicon-king mycolor"></i></span>
					                     <input size="60" maxlength="255" className="form-control" placeholder="Last Name" name="UserRegistration[lname]" id="UserRegistration_lname" type="text">                                    </div> -->
					                <div className="input-group margin-bottom-20">
					                   <span className="input-group-addon">
					                    <i className="glyphicon glyphicon-user mycolor"></i>
					                   </span>
					                    <input size="60" maxlength="255" className="form-control" placeholder="User Name" name="email" id="UserRegistration_username" type="text">   
					                </div>

					                <div className="input-group margin-bottom-20">
					                   <span className="input-group-addon">
					                    <i className="glyphicon glyphicon-lock mycolor"></i>
					                   </span>
					                    <input size="60" maxlength="255" className="form-control" placeholder="Password" name="password" id="UserRegistration_password" type="password">                                    
					                </div>
					           
					           
					              <div className="row">
					                <div className="col-md-12">
					                  <button className="btn-u pull-left" type="submit">Sign Up</button>
					                </div> 
					              </div> 
					            </form>  
					          </div> 
					          <div className="col-md-2"></div>
					        </div> 
					      </div> 

					    <div id="foot">
					      <div className="container-fluid"> 
					        <div id="results" className="col-xs-10 col-xs-offset-2 col-md-4 col-md-offset-4">
					        </div>
					      </div>
					    </div>

					  <footer id="footer">
					      <div>
					          <nav className="navbar navbar-default fixed-bottom" id="footNav">
					              <img id="pic" src="images/logo.png">
					              <p>Posted by:</p>
					          </nav>
					      </div>
					  </footer>
		          </div>
		        );
		    }
		});

		