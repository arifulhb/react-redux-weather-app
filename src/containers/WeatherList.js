import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';
// import { Sparklines, SparklinesLine } from 'react-sparklines';
// import {Sparklines} from "react-sparklines/src/Sparklines";
// import {bindActionCreators} from 'redux';
// import {fetchWeather} from '../actions/index';


class WeatherList extends Component {

    constructor(props) {
        super(props);
    }

    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        const { lon, lat} = cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="green" unit="k"/></td>
                <td><Chart data={pressures} color="black" unit="hPa"/></td>
                <td><Chart data={humidities} color="red" unit="%"/></td>
            </tr>
        );
    }

    render() {

        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th >City</th>
                    <th >Temperature (k)</th>
                    <th >Pressure</th>
                    <th >Humidity</th>
                </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather)}
                </tbody>

            </table>

        );
    }

}

/**
 *
 * @param state
 * @returns {{weather: *}}
 */
function mapStateToProps(state) {

    return {weather: state.weather};

}

export default connect(mapStateToProps)(WeatherList);
