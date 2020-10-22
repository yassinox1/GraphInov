import React from 'react'
import { FaHistory,FaAngleDown } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const NavR = () => {
    const classes = useStyles();
    return (
        <div>
            <div class="app-header-right" style={{
                alignItems: 'center',
                display: 'flex',
                marginLeft: 'auto'
            }}>
				 <ul class="header-menu nav" style={{flexWrap: 'nowrap'}}>
				 <li class="nav-item">
             
								 <div class="dropdown">
								   <a class="nav-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaHistory class=" av-link-icon" aria-hidden="true"></FaHistory>History<FaAngleDown class="  ml-2 opacity-5"></FaAngleDown></a>
                                                <div class="dropdown-menu insidecardfonts1" aria-labelledby="dropdownMenuLink" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top:' 0px', left: '0px', transform: 'translate3d(5px, 23px, 0px)'}}>
                                                   <h6 class="dropdown-header">Parties</h6>
												   <div class="dropdown-divider"></div>
                                                   <a class="dropdown-item" href="#">1. Mrs Conjointe2 140579</a>
                                                   <a class="dropdown-item" href="#">2. Mr Simon ALINDOS</a>
												     <div class="dropdown-divider"></div>
												     <h6 class="dropdown-header">Contract/Proposals</h6>
												   <div class="dropdown-divider"></div>
                                                   <a class="dropdown-item" href="#">1. #S000000006 | Mrs Conjointe2 140579</a>
												     <div class="dropdown-divider"></div>
                                                     <h6 class="dropdown-header">Claims</h6>
												   <div class="dropdown-divider"></div>
												    <a class="dropdown-item" href="#">1. No. 2020080A000000001</a>
												   
                                                </div>
                                             </div>
                            
                        </li>
						</ul>
				<div class="search-wrapper">
                        <div class="input-holder">
                            <input type="text" class="search-input" placeholder="Type to search"/>
                            <button class="search-icon"><span></span></button>
                        </div>
                        <button class="close"></button>
                    </div>
							
                    <div class="header-btn-lg pr-0">
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                            <Avatar alt="Remy Sharp" src={require('../../asstes/images/avatars/9.jpg')} />
                                <div class="widget-content-left  ml-3 header-user-info">
                                    
                                    <div class="widget-heading">
                                        Yassine EL MATAR	
                                    </div>
                                    <div class="widget-subheading">
                                        YELMATAR@DXC.COM
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>        </div>
       </div>
    )
}

export default NavR
