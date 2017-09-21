import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';

class ShowPost extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'AllBlogs': {}
    }
  }

  componentDidMount() {
        const { id } = this.props.match.params;
        const link=`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
        fetch(link).then(results => results.json())
      .then(data => {
        console.log('here is the data:',data);
        this.setState({
          AllBlogs:data
        })
      })
  }
  render(){
    console.log(this.state.AllBlogs);
    let formStyle={
      backgroundImage: 'url(https://wallpapercave.com/wp/EKTo81t.jpg)',
      height: '1200px',
        color: 'white',
        textDecoration: 'none'

    }
    let {AllBlogs} = this.state
    return(
      <div style={formStyle}>
        <h1>{AllBlogs.title}</h1>
        <h3>Posted by:{AllBlogs.name}</h3>
          <p>{AllBlogs.blog}</p>
          <Button variant="raised"><NavLink to="/all" >Return Back To Posts </NavLink></Button>
      </div>
    )

  }
}

  export default ShowPost;
