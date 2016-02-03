import React from 'react';
import ReactDOM from 'react-dom';
import style from './style';
import Block from './components/block';
import Provinces from './components/provinces'


export class App extends React.Component {

      onChange(){
            alert('Worked');
      }

	render() {

            var provs = [
                  {value:'NS',label:'NS'},
                  {value:'NL',label:'NL'},
                  {value:'NB',label:'NB'},
            ];

		return (
      		<div className={style.body}>
      			<div className="row">
      				<div className="col-lg-1 col-md-12 col-sm-12 col-xs-12">
      					<h2 className={style.header}>Header Text</h2>
      				</div>
      			</div>
                        <div className="row">
                              <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12">
                                    <Provinces className={style.center} provinces={provs} onChange={this.onChange.bind(this)}/>
                              </div>
                        </div>
      			<div className="row">
      				<div className="col-md-6 col-sm-6 col-xs-12">
      					<Block/>
      				</div>
      				<div className="col-md-6 col-sm-6 col-xs-12">
      					<Block/>
      				</div>
      			</div>
      		</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
