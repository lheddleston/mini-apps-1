
const app = {

  init: () => {
    $('#app').append(`<form id="form" method="POST" action="/upload_json"></form>`);
    $('#form').append(`<input type="text" id="text" name="text">`);
    $('#form').append(`<button type="submit" id="submit">Submit</button>`);
    $('#submit').on('click', app.submit);
  },

  submit: (event) => {
    var message = { text: $('#text').val() };

    //   $ajax({
    //     type: 'POST',
    //     data: JSON.stringify(message),
    //     contentType: 'application/json',
    //     success: (data) => {
    //       $('#text').val();
    //       app.render(data);
    //     }
    //   });
    //   event.preventDefault();
    // },

    render: (data) => {
      $("#app").append(data);
    }


  }

//method="POST" action="/upload_json"