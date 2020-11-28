/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: sid-bell <sid-bell@student.1337.ma>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/11/15 19:37:28 by sid-bell          #+#    #+#             */
/*   Updated: 2020/11/16 09:54:02 by sid-bell         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const qs = require('querystring') 

module.exports = (method, url, data, callback) =>{
    var http = new XMLHttpRequest();
    http.open(method, url, true); 
    http.withCredentials = true
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {
        if(http.readyState === 4) {
            callback(this.status, http.responseText)
        }
    }
    http.send(qs.stringify(data));
}
