import Joi from "joi-browser";
import { getFlipbook, saveFlipbook } from "./../services/flipbookService";
import Form from "./common/form";
import auth from "../services/authService";

class FlipbookForm extends Form {
  state = {
    data: {
      title: "",
      description: "",
      flipbookImgs: null,
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().min(5).max(255).required().label("Title"),
    description: Joi.string().required().min(5).max(1024).label("Description"),
    flipbookImgs: Joi.required(),
  };

  async populateFlipbook() {
    const flipbookId = this.props.match.params.id;
    if (!flipbookId) return;
    try {
      const { data: flipbook } = await getFlipbook(flipbookId);
      this.setState({ data: this.mapToViewModel(flipbook) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateFlipbook();
  }

  mapToViewModel(flipbook) {
    return {
      _id: flipbook._id,
      title: flipbook.title,
      description: flipbook.description,
    };
  }

  doSubmit = async () => {
    const { title, description, flipbookImgs } = this.state.data;

    let data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("flipbookImgs", flipbookImgs);
    console.log(data);
    try {
      await saveFlipbook(data);
      this.props.history.push("/movies");
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) {
      return (
        <div className="container my-5">
          <h1>Movie Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title")}{" "}
            {this.renderInput("description", "Description")}
            {this.renderFileInput(
              "flipbookImgs",
              "Flipbook Images",
              "multiple"
            )}
            {this.renderButton("Save")}
          </form>
        </div>
      );
    }

    return (
      <div className="container mt-5">
        <h1>Not Authorised</h1>
      </div>
    );
  }
}

export default FlipbookForm;
