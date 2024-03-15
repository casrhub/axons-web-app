import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'app/api', // define api folder under app folder
    definition: {
        "openapi": "3.0.0",
        "info": {
          "title": "Video Upload API",
          "version": "1.0.0",
          "description": "Welcome to the Axons API v1, designed to support the foundational stages of the Axons web application development. This API provides a comprehensive suite of endpoints tailored for developers, facilitating efficient integration and streamlined development workflows. As the backbone of our initial development phase, it aims to deliver robust functionality and flexibility, enabling the rapid evolution of the Axons platform."
      
        },
        "servers": [
          {
            "url": "http//localhost:3000"
          }
        ],
        "tags": [
          {
            "name": "Videos"
          },
          {
            "name": "Transcription"
          },
          {
            "name": "Feedback"
          }
        ],
        "paths": {
          "/videos": {
            "post": {
              "tags": [
                "Videos"
              ],
              "summary": "Upload a new video",
              "description": "Allows users to upload a new video file.",
              "requestBody": {
                "content": {
                  "multipart/form-data": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "video": {
                          "type": "string",
                          "format": "binary",
                          "description": "The video file to upload."
                        },
                        "title": {
                          "type": "string",
                          "description": "The title of the video."
                        },
                        "description": {
                          "type": "string",
                          "description": "A brief description of the video."
                        }
                      },
                      "required": [
                        "video"
                      ]
                    }
                  }
                }
              },
              "responses": {
                "201": {
                  "description": "Video uploaded successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "message": {
                            "type": "string",
                            "example": "Video uploaded successfully."
                          },
                          "videoId": {
                            "type": "string",
                            "example": "12345"
                          },
                          "status": {
                            "type": "string",
                            "example": "processing"
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad request (e.g., invalid video format)",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Bad Request"
                          },
                          "message": {
                            "type": "string",
                            "example": "Invalid file format. Only MP4 videos are supported."
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized (e.g., user not logged in)",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Unauthorized"
                          },
                          "message": {
                            "type": "string",
                            "example": "Authentication required. Please log in."
                          }
                        }
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal server error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Internal Server Error"
                          },
                          "message": {
                            "type": "string",
                            "example": "An unexpected error occurred. Please try again later."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/videos/{id}": {
            "get": {
              "tags": [
                "Videos"
              ],
              "summary": "Retrieve information about a specific video",
              "description": "Returns detailed information about a video with the specified ID.",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string"
                  },
                  "description": "The unique identifier of the video to retrieve."
                }
              ],
              "responses": {
                "200": {
                  "description": "Successfully retrieved video information.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "videoId": {
                            "type": "string",
                            "example": "12345"
                          },
                          "title": {
                            "type": "string",
                            "example": "An Introduction to Quantum Computing"
                          },
                          "description": {
                            "type": "string",
                            "example": "This video provides a comprehensive overview of quantum computing."
                          },
                          "uploadTime": {
                            "type": "string",
                            "format": "date-time",
                            "example": "2024-03-11T09:30:00Z"
                          },
                          "status": {
                            "type": "string",
                            "example": "available"
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad request, such as an improperly formatted video ID.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Bad Request"
                          },
                          "message": {
                            "type": "string",
                            "example": "The video ID is improperly formatted."
                          }
                        }
                      }
                    }
                  }
                },
                "404": {
                  "description": "The video with the specified ID was not found.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Not Found"
                          },
                          "message": {
                            "type": "string",
                            "example": "Video with the specified ID does not exist."
                          }
                        }
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal server error.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Internal Server Error"
                          },
                          "message": {
                            "type": "string",
                            "example": "An unexpected error occurred. Please try again later."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/videos/user/{userId}": {
            "get": {
              "tags": [
                "Videos"
              ],
              "summary": "Retrieve videos uploaded by a user",
              "description": "Returns a list of videos uploaded by the specified user.",
              "parameters": [
                {
                  "in": "path",
                  "name": "userId",
                  "required": true,
                  "schema": {
                    "type": "string"
                  },
                  "description": "The unique identifier of the user whose videos are to be retrieved."
                }
              ],
              "responses": {
                "200": {
                  "description": "Successfully retrieved list of videos.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "videoId": {
                              "type": "string",
                              "example": "12345"
                            },
                            "title": {
                              "type": "string",
                              "example": "Learning about quantum computing "
                            },
                            "description": {
                              "type": "string",
                              "example": "This video provides a comprehensive overview of quantum computing."
                            },
                            "uploadTime": {
                              "type": "string",
                              "format": "date-time",
                              "example": "2024-03-11T09:30:00Z"
                            },
                            "status": {
                              "type": "string",
                              "example": "available"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad request, such as an improperly formatted userId.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Bad Request"
                          },
                          "message": {
                            "type": "string",
                            "example": "The userId is improperly formatted."
                          }
                        }
                      }
                    }
                  }
                },
                "404": {
                  "description": "No videos found for the specified user ID.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Not Found"
                          },
                          "message": {
                            "type": "string",
                            "example": "No videos found for the specified user ID."
                          }
                        }
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal server error.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Internal Server Error"
                          },
                          "message": {
                            "type": "string",
                            "example": "An unexpected error occurred. Please try again later."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/videos/{videoId}": {
            "delete": {
              "tags": [
                "Videos"
              ],
              "summary": "Delete a specific video",
              "description": "Deletes the video with the specified ID from the system.",
              "parameters": [
                {
                  "in": "path",
                  "name": "videoId",
                  "required": true,
                  "schema": {
                    "type": "string"
                  },
                  "description": "The unique identifier of the video to be deleted."
                }
              ],
              "responses": {
                "200": {
                  "description": "Video deleted successfully.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "message": {
                            "type": "string",
                            "example": "Video deleted successfully."
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad request, such as an improperly formatted video ID.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Bad Request"
                          },
                          "message": {
                            "type": "string",
                            "example": "The video ID is improperly formatted."
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized, indicating the user is not permitted to delete the video.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Unauthorized"
                          },
                          "message": {
                            "type": "string",
                            "example": "You do not have permission to delete this video."
                          }
                        }
                      }
                    }
                  }
                },
                "404": {
                  "description": "The video with the specified ID was not found.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Not Found"
                          },
                          "message": {
                            "type": "string",
                            "example": "Video with the specified ID does not exist."
                          }
                        }
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal server error.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Internal Server Error"
                          },
                          "message": {
                            "type": "string",
                            "example": "An unexpected error occurred. Please try again later."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/transcribe/{videoId}": {
            "post": {
              "tags": [
                "Transcription"
              ],
              "summary": "Request a transcription of a specific video",
              "description": "Initiates the transcription process for the video with the specified ID.",
              "parameters": [
                {
                  "in": "path",
                  "name": "videoId",
                  "required": true,
                  "schema": {
                    "type": "string"
                  },
                  "description": "The unique identifier of the video to be transcribed."
                }
              ],
              "requestBody": {
                "description": "Optional parameters for transcription request",
                "required": false,
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "language": {
                          "type": "string",
                          "description": "Language code for the transcription process.",
                          "example": "en-US"
                        }
                      }
                    }
                  }
                }
              },
              "responses": {
                "202": {
                  "description": "Transcription request accepted and is in process.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "message": {
                            "type": "string",
                            "example": "Transcription process initiated successfully."
                          },
                          "transcriptionId": {
                            "type": "string",
                            "example": "trans12345"
                          },
                          "status": {
                            "type": "string",
                            "example": "processing"
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad request, such as an improperly formatted video ID or missing parameters.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Bad Request"
                          },
                          "message": {
                            "type": "string",
                            "example": "The video ID is improperly formatted or missing required parameters."
                          }
                        }
                      }
                    }
                  }
                },
                "404": {
                  "description": "The video with the specified ID was not found.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Not Found"
                          },
                          "message": {
                            "type": "string",
                            "example": "Video with the specified ID does not exist."
                          }
                        }
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal server error.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Internal Server Error"
                          },
                          "message": {
                            "type": "string",
                            "example": "An unexpected error occurred. Please try again later."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/transcribe/{videoId}/status": {
            "get": {
              "tags": [
                "Transcription"
              ],
              "summary": "Request the status of a transcription",
              "description": "Retrieves the current status of the transcription process for the video with the specified ID.",
              "parameters": [
                {
                  "in": "path",
                  "name": "videoId",
                  "required": true,
                  "schema": {
                    "type": "string"
                  },
                  "description": "The unique identifier of the video for which to retrieve the transcription status."
                }
              ],
              "responses": {
                "200": {
                  "description": "Successfully retrieved the transcription status.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "transcriptionId": {
                            "type": "string",
                            "example": "trans12345"
                          },
                          "videoId": {
                            "type": "string",
                            "example": "12345"
                          },
                          "status": {
                            "type": "string",
                            "description": "The current status of the transcription process.",
                            "example": "processing"
                          },
                          "progress": {
                            "type": "number",
                            "format": "float",
                            "description": "The percentage of the transcription process completed.",
                            "example": 75
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad request, such as an improperly formatted video ID.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Bad Request"
                          },
                          "message": {
                            "type": "string",
                            "example": "The video ID is improperly formatted."
                          }
                        }
                      }
                    }
                  }
                },
                "404": {
                  "description": "The video or transcription with the specified ID was not found.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Not Found"
                          },
                          "message": {
                            "type": "string",
                            "example": "Transcription or video with the specified ID does not exist."
                          }
                        }
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal server error.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Internal Server Error"
                          },
                          "message": {
                            "type": "string",
                            "example": "An unexpected error occurred. Please try again later."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/feedback/generate": {
            "post": {
              "tags": [
                "Feedback"
              ],
              "summary": "Generate feedback of a video based on a transcription",
              "description": "Submits a video transcription and generates feedback based on the content of the transcription.",
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "videoId": {
                          "type": "string",
                          "description": "The unique identifier of the video.",
                          "example": "12345"
                        },
                        "transcription": {
                          "type": "string",
                          "description": "The full text of the video's transcription.",
                          "example": "This is the full transcription of the video."
                        },
                        "additionalParameters": {
                          "type": "object",
                          "description": "Optional additional parameters for feedback generation.",
                          "properties": {
                            "detailLevel": {
                              "type": "string",
                              "description": "The desired level of detail for the feedback.",
                              "example": "detailed"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Feedback generated successfully.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "videoId": {
                            "type": "string",
                            "example": "12345"
                          },
                          "feedback": {
                            "type": "string",
                            "description": "Generated feedback based on the video's transcription.",
                            "example": "Your video provides a comprehensive overview in quantum computer but some gaps can be filled: treating supersposition as..."
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad request, such as missing required fields or improper request format.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Bad Request"
                          },
                          "message": {
                            "type": "string",
                            "example": "Missing required fields or improper format."
                          }
                        }
                      }
                    }
                  }
                },
                "404": {
                  "description": "The video with the specified ID was not found.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Not Found"
                          },
                          "message": {
                            "type": "string",
                            "example": "Video with the specified ID does not exist."
                          }
                        }
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal server error.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Internal Server Error"
                          },
                          "message": {
                            "type": "string",
                            "example": "An unexpected error occurred. Please try again later."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/feedback/{userId}": {
            "get": {
              "tags": [
                "Feedback"
              ],
              "summary": "Retrieve feedback for a specific user",
              "description": "Retrieves all feedback entries made for the videos uploaded by the user with the specified user ID.",
              "parameters": [
                {
                  "in": "path",
                  "name": "userId",
                  "required": true,
                  "schema": {
                    "type": "string"
                  },
                  "description": "The unique identifier of the user whose feedback is to be retrieved."
                }
              ],
              "responses": {
                "200": {
                  "description": "Successfully retrieved feedback for the user.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "feedbackId": {
                              "type": "string"
                            },
                            "videoId": {
                              "type": "string"
                            },
                            "feedback": {
                              "type": "string"
                            },
                            "createdAt": {
                              "type": "string",
                              "format": "date-time"
                            },
                            "rating": {
                              "type": "integer",
                              "format": "int32",
                              "description": "Rating given to the video by the reviewer, on a scale of 1 to 5."
                            }
                          }
                        },
                        "example": [
                          {
                            "feedbackId": "feedback123",
                            "videoId": "12345",
                            "feedback": "Great explanation on quantum computing, but could use more visual aids.",
                            "createdAt": "2024-03-11T09:30:00Z",
                            "rating": 5
                          },
                          {
                            "feedbackId": "feedback456",
                            "videoId": "67890",
                            "feedback": "Needs clearer explanations in the latter sections.",
                            "createdAt": "2024-03-12T11:15:00Z",
                            "rating": 4
                          }
                        ]
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad request, such as an improperly formatted userId.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Bad Request"
                          },
                          "message": {
                            "type": "string",
                            "example": "The userId is improperly formatted."
                          }
                        }
                      }
                    }
                  }
                },
                "404": {
                  "description": "No feedback found for the specified user ID.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Not Found"
                          },
                          "message": {
                            "type": "string",
                            "example": "No feedback found for the specified user ID."
                          }
                        }
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal server error.",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "error": {
                            "type": "string",
                            "example": "Internal Server Error"
                          },
                          "message": {
                            "type": "string",
                            "example": "An unexpected error occurred. Please try again later."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      
      ,
  });
  return spec;
};
