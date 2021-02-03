import React from 'react';
import axios from "axios";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.showdetail = this.showdetail.bind(
            this
          );
        this.state = {
           charcard:"",
           showData : false,
           selectVal : "Characters",
           showCharcters:true,
           episodecard:"",
           defaultImg:"https://static.wikia.nocookie.net/breakingbad/images/7/78/Holly.JPG/revision/latest/scale-to-width-down/683?cb=20100413115129"
        }
       
    }
    
    showdetail(){
        console.log(this.state.showData);
        this.setState(state => ({
            showData: !state.showData
          }));
      
    }
    handleChange = (event) => {
      const name = event.target.value;
      this.setState({
        selectVal: name,
        showCharcters: !this.state.showCharcters
      })
     
    }
    componentDidMount() {
        axios.get("https://www.breakingbadapi.com/api/characters")
          .then(response => {
            console.log("course list ", response);
            const chardata = response.data;
           
           let allChar = chardata.map((chardata,i) =>  (
                <div className="charCard" key={chardata.char_id}>
                  <div id="2burg" tabindex="0" className="sc-EHOje jaGwnY"  onClick={this.showdetail}>
                      <div id="2burga" width="30px" class="sc-bZQynM fgPKig"></div>
                      <div id="2burgb" width="40px" class="sc-bZQynM gCILqu"></div>
                      <div id="2burgc" width="22px" class="sc-bZQynM lfMqRr"></div>
                    </div>
                 <img className="char_img" src={chardata.img} alt="Jesse Pinkman" />
                 
                   <div className= {"char_btm " + (this.state.showData ? "btm2" : "")} >
                     <p className="sc-gzVnrw btPmOt">{chardata.name}</p>
                   <div className="">
                    <img className="bee_logo" src="https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg" alt="" />
                    <p> {chardata.nickname}</p>
                    </div>
                    
                    <div className="hidden_info">
                        <div><p>Id</p><p>{chardata.char_id}</p>
                        </div>
                        {/* <div><p>Occupation</p><p className="occ_map">{chardata.occupation}</p>
                        </div> */}
                        <div>
                            <p>Breaking Bad Seasons</p>{chardata.appearance}
                        </div><div>
                            <p>Status</p>
                            <p>{chardata.status}</p>
                            </div>
                            </div>
                    
                 </div>
                 </div>

            ));
            this.setState({
                charcard: allChar
            });
          })
          .catch(error => {
            console.log(error);
          });
          axios.get("https://www.breakingbadapi.com/api/episodes")
          .then(response => {
            console.log("course list ", response);
            const episeodedata = response.data;
           
           let allepisode = episeodedata.map((episeodedata,i) =>  (
                <div className="charCard" key={episeodedata.episode_id}>
                  <div id="2burg" tabindex="0" className="sc-EHOje jaGwnY" >
                      <div id="2burga" width="30px" class="sc-bZQynM fgPKig"></div>
                      <div id="2burgb" width="40px" class="sc-bZQynM gCILqu"></div>
                      <div id="2burgc" width="22px" class="sc-bZQynM lfMqRr"></div>
                    </div>
                 <img className="char_img" src={this.state.defaultImg} alt="Jesse Pinkman" />
                 
                   <div className= {"char_btm btm2"} >
                     <p className="sc-gzVnrw btPmOt"><b>Title:</b> {episeodedata.title}</p>
                   <div className="">
                    <img className="bee_logo" src="https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg" alt="" />
                    <p> Season: {episeodedata.season}</p>
                    </div>
                    
                    <div className="hidden_info">
                        <div><p>Episode Id</p><p>{episeodedata.episode_id}</p>
                        </div>
                        <div><p>Air Date</p><p className="occ_map">{episeodedata.air_date}</p>
                        </div>
                        
                        <div className="characters-name">
                            <p>Characters</p>
                            <p>{episeodedata.characters}</p>
                            </div>
                            </div>
                    
                 </div>
                 </div>
            ));
            this.setState({
                episodecard: allepisode
            });
          })
          .catch(error => {
            console.log(error);
          });
        }
            render() {
                console.log("render() method");
                console.log(this.state.showData);
        return (
            <div className="charlist" >
                <h1  onClick={() => this.showdetail()}>The Breaking Bad {this.state.selectVal}</h1>
                <div className="Select-div">
                
                <Select
                native
                value={this.state.selectVal}
                onChange={this.handleChange}
                inputProps={{
                id: 'age-native-simple',
                }}
                >
                <option value={"Characters"}>Characters</option>
                <option value={"Episodes"}>Episodes</option>
                </Select>
                </div>
                {this.state.showCharcters?(
                    <div className="charlist-" >
                    {this.state.charcard}
               </div>
                ):(
                  <div className="charlist-" >
                  {this.state.episodecard}
             </div>
                )}
              
            </div>
           )
    }
}

export default Dashboard;