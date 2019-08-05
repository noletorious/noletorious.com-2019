import React,{Component} from "react"
import PageLayout from "../layouts/page"
import Projects from "../components/Projects/projects"


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHome: true
    };
  }

  render(){
    return (
      <PageLayout page ={this.state.isHome}>
        <Projects />
      </PageLayout>
    )
  }
}

export default HomePage
