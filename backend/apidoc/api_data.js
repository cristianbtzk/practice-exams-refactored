define({ "api": [
  {
    "type": "get",
    "url": "/answers/:test_id",
    "title": "List answers from test",
    "group": "Answers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tes_id",
            "description": "<p>Test ID</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>JWT token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "{\n  \"Bearer ${token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "answers",
            "description": "<p>Answers List</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.id",
            "description": "<p>Answer ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "answers.number",
            "description": "<p>Answer Number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.answer",
            "description": "<p>Question Answer</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "answers.is_correct",
            "description": "<p>Question answer is correct</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.created_at",
            "description": "<p>Data creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.updated_at",
            "description": "<p>Data updating date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.test_id",
            "description": "<p>Specify which test is the answer from</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n [\n   {\n     \"id\": \"uuid\",\n     \"number\": 1,\n     \"answer\": \"a\",\n     \"is_correct\": true,\n     \"createdAt\": \"2021-01-23T12:53:30.213Z\",\n     \"updatedAt\": \"2021-01-23T12:53:30.213Z\",\n     \"test_id\": \"uuid\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error object</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": \"error\",\n  \"message\": \"Invalid JWT token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/answers.routes.js",
    "groupTitle": "Answers",
    "name": "GetAnswersTest_id"
  },
  {
    "type": "post",
    "url": "/sessions",
    "title": "Login",
    "group": "Sessions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"login@email.com\"\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>Response</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.token",
            "description": "<p>JWT token</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "object.user",
            "description": "<p>User details</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.user.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.user.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.user.created_at",
            "description": "<p>User creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.user.updated_at",
            "description": "<p>User data update date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"user\":{\n     \"id\": \"uuid id\",\n     \"name\": \"John Doe\",\n     \"email\": \"email@email.com\",\n     \"createdAt\": \"2021-01-23T12:53:30.213Z\",\n     \"updatedAt\": \"2021-01-23T12:53:30.213Z\",\n   }\n   \"token\": \"JWT TOKEN\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error object</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": \"error\",\n  \"message\": \"Incorrect data\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/sessions.routes.js",
    "groupTitle": "Sessions",
    "name": "PostSessions"
  },
  {
    "type": "get",
    "url": "/tests/:page",
    "title": "List tests",
    "group": "Tests",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>JWT token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "{\n  \"Bearer ${token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\"http://localhost:3333/tests/1\"",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>Response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.count",
            "description": "<p>Total tests in database</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.tests",
            "description": "<p>Tests list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.tests.id",
            "description": "<p>Total tests in database</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.tests.score",
            "description": "<p>Test score</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object.tests.user",
            "description": "<p>Test user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"tests\":[\n     {\n       \"id\": \"uuid id\",\n       \"score\": 1000,\n       \"user\": {\n         \"name\": \"John Doe\",\n         \"email\": \"johndoe@email.com\"\n       }\n     }\n\n   ]\n   \"count\": 20\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error object</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": \"error\",\n  \"message\": \"Invalid JWT token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/tests.routes.js",
    "groupTitle": "Tests",
    "name": "GetTestsPage"
  },
  {
    "type": "post",
    "url": "/tests",
    "title": "Create test",
    "group": "Tests",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>JWT token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "{\n  \"Bearer ${token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "answers",
            "description": "<p>Test answers</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "answers.number",
            "description": "<p>Answer question number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answers.answer",
            "description": "<p>Answer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"answers\": [\n     {\n       \"number\": 1\n       \"answer\": \"a\"\n     },\n     {\n       \"number\": 2\n       \"answer\": \"c\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>Response</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>Test id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.score",
            "description": "<p>Test score</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"id\": \"uuid id\",\n   \"score\": 1000,\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error object</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": \"error\",\n  \"message\": \"Invalid JWT token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/tests.routes.js",
    "groupTitle": "Tests",
    "name": "PostTests"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"John doe@email.com\",\n  \"email\": \"johndoe@email.com\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>Response</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.created_at",
            "description": "<p>User creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.updated_at",
            "description": "<p>User data update date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"id\": \"uuid id\",\n   \"name\": \"John Doe\",\n   \"email\": \"email@email.com\",\n   \"createdAt\": \"2021-01-23T12:53:30.213Z\",\n   \"updatedAt\": \"2021-01-23T12:53:30.213Z\",\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error object</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"status\": \"error\",\n  \"message\": \"Email already in use\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.routes.js",
    "groupTitle": "Users",
    "name": "PostUsers"
  }
] });
