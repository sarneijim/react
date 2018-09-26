
import React, { Component } from 'react';
import {  Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderDish(dish) {
      if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
      else
        return(
            <div></div>
        );
    }
    renderTitle(dish) {
      if (dish != null)
        return (
          <h2>
            Comments
          </h2>
        );
    }
    renderComments(dish) {
      if (dish != null)
        return (
          dish.comments.map(comment => {
            return (
              <div  key={comment.id}>
                <p>
                  {comment.comment}
                </p>
                <p>
                  --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                </p>

              </div>
            );
          })
        );
      else
        return(
            <div></div>
        );
    }
    render() {
      return (
        <div className="container">
          <div className="row">
            <div  className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderTitle(this.props.dish)}
              {this.renderComments(this.props.dish)}
            </div>
          </div>
        </div>
      );
    }
}

export default DishDetail;
