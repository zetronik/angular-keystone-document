import {DocumentRender} from "document-renderer";

export const structureDemo: DocumentRender = [
  {
    "type": "unordered-list",
    "children": [
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "bold": true,
                "italic": true,
                "code": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "italic": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "strikethrough": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "subscript": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "superscript": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "underline": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "ordered-list",
    "children": [
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "bold": true,
                "italic": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "italic": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "strikethrough": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "subscript": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "superscript": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text",
                "underline": true
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "list-item-content",
            "children": [
              {
                "text": "text"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "divider",
    "children": [
      {
        "text": ""
      }
    ]
  },
  {
    "type": "blockquote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          {
            "text": "wefwe"
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [
          {
            "text": "wefwe"
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [
          {
            "text": "wefwe"
          }
        ]
      }
    ]
  },
  {
    "type": "heading",
    "children": [
      {
        "text": "Heading text config H1",
        "strikethrough": true
      }
    ],
    "level": 3
  },
  {
    "type": "heading",
    "children": [
      {
        "text": "Heading text config H2",
        "bold": true
      }
    ],
    "level": 2,
    "textAlign": "center"
  },
  {
    "type": "heading",
    "children": [
      {
        "text": "Heading text config H3",
        "underline": true
      }
    ],
    "level": 3,
    "textAlign": "end"
  },
  {
    "type": "heading",
    "children": [
      {
        "text": "Heading text config H4",
        "italic": true
      }
    ],
    "level": 4,
    "textAlign": "center"
  },
  {
    "type": "heading",
    "children": [
      {
        "text": "Heading text config h5",
        "italic": true,
        "bold": true
      }
    ],
    "level": 5
  },
  {
    "type": "heading",
    "children": [
      {
        "text": "Heading text config h6"
      }
    ],
    "level": 6,
    "textAlign": "center"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading text config"
      }
    ],
    "textAlign": "end"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading",
        "subscript": true
      },
      {
        "text": " "
      },
      {
        "text": "text config",
        "superscript": true
      }
    ],
    "textAlign": "center"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading text config",
        "underline": true
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading text config",
        "strikethrough": true
      }
    ],
    "textAlign": "center"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading text config",
        "code": true,
        "bold": true
      }
    ],
    "textAlign": "end"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading text config",
        "keyboard": true
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading text config",
        "subscript": true,
        "strikethrough": true
      }
    ],
    "textAlign": "center"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading text config",
        "superscript": true,
        "italic": true,
        "bold": true
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading text config "
      },
      {
        "text": "Heading text config",
        "subscript": true
      }
    ],
    "textAlign": "center"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Heading text config"
      }
    ],
    "textAlign": "end"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": ""
      }
    ]
  }
]

