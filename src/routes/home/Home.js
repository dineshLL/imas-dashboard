

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';
import axios from 'axios';

import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'IMAS Dashboard';


const data = [
      { name: 'log', cpu_usage: 4000, mem_usage: 2400, net_usage: 2400, value: 600 },
      { name: 'users', cpu_usage: 3000, mem_usage: 1398, net_usage: 2210, value: 300 },
      { name: 'orders', cpu_usage: 2000, mem_usage: 9800, net_usage: 2290, value: 500 },
      { name: 'payment', cpu_usage: 2780, mem_usage: 3908, net_usage: 2000, value: 400 },
      { name: 'items', cpu_usage: 1890, mem_usage: 4800, net_usage: 2181, value: 200 },
      { name: 'auth', cpu_usage: 2390, mem_usage: 3800, net_usage: 2500, value: 700 },
      { name: 'kafka', cpu_usage: 3490, mem_usage: 4300, net_usage: 2100, value: 100 },
];

function Home(props, context) {
  context.setTitle(title);
  
  axios.get('http://192.168.137.1:12112/imas-router/meta/a/min')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          {/* <PageHeader>IMAS Dashboard</PageHeader> */}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-primary"
            icon="fa fa-area-chart fa-5x"
            count="auth"
            headerText="Latent Service"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-green"
            icon="fa fa-bolt fa-5x"
            count="items"
            headerText="Resp Service"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-yellow"
            icon="fa fa-cloud fa-5x"
            count="124"
            headerText="No of Calls"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-red"
            icon="fa fa-support fa-5x"
            count="27%"
            headerText="Docker Usage"
            linkTo="/"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Response Chart
              {/* <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div> */}
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Area type="monotone" dataKey="cpu_usage" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="mem_usage" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="net_usage" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Response bar Chart
              {/* <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton2">
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div> */}
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="mem_usage" stackId="1" fill="#8884d8" />
                  <Bar dataKey="cpu_usage" stackId="1" fill="#82ca9d" />
                  <Bar type="monotone" dataKey="net_usage" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          {/* <Panel
            header={<span>
              <i className="fa fa-clock-o fa-fw" /> Responsive Timeline
            </span>}
          >
            <div>
              <ul className="timeline">
                <li>
                  <div className="timeline-badge"><i className="fa fa-check" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> 11 hours ago via Twitter
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                        laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia
                        pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas
                        suscipit facere rem dicta, debitis.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge warning"><i className="fa fa-credit-card" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem
                        quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis
                        rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia
                        repellendus.
                      </p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
                        maiores odit qui est tempora eos, nostrum provident explicabo dignissimos
                        debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge danger"><i className="fa fa-bomb" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
                        numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil
                        iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Panel> */}

        </div>

        <div className="col-lg-4">

          <Panel
            header={<span>
              <i className="fa fa-bell fa-fw" /> Images List
            </span>}
          >
            <ListGroup>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw" /> ubuntu:latest
                <span className="pull-right text-muted small"><em>4 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-twitter fa-fw" /> centos:latest
                <span className="pull-right text-muted small"><em>12 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-envelope fa-fw" /> tomcat:latest
                <span className="pull-right text-muted small"><em>27 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-tasks fa-fw" /> python:latest
                <span className="pull-right text-muted small"><em>43 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-upload fa-fw" /> mariadb:latest
                <span className="pull-right text-muted small"><em>11:32 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-bolt fa-fw" /> imas-router:latest
                <span className="pull-right text-muted small"><em>11:13 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-warning fa-fw" /> imas-apigateway:latest
                <span className="pull-right text-muted small"><em>10:57 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-shopping-cart fa-fw" /> imas-itemList:latest
                <span className="pull-right text-muted small"><em>9:49 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-money fa-fw" /> imas-auth:latest
                <span className="pull-right text-muted small"><em>Yesterday</em></span>
              </ListGroupItem>
            </ListGroup>
            {/* <Button block>View All Alerts</Button> */}
          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Donut Chart
            </span>}
          >
            <div>
              <Donut data={data} color="#8884d8" innerRadius="70%" outerRadius="90%" />
            </div>
          </Panel>

        </div>

      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
