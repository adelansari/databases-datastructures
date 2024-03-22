## Disk storage

Disk storage refers to the various ways data can be stored in a computer system. Here are some common types:

- **Plain text files**: These are simple files that contain only text. They can be read and edited using any text editor. Example: .txt files.

- **Structured text files**: These are text files with a specific structure or format. They include:
  - **JSON (JavaScript Object Notation)**: A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. Example: .json files.
  - **CSV/TSV (Comma Separated Value/Tab Separated Value)**: These files store tabular data (numbers and text) in plain text, with columns separated by a comma or tab, respectively. Example: .csv or .tsv files.
  - **XML (eXtensible Markup Language)**: A markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. Example: .xml files.
  - **INI**: A simple configuration file format. Example: .ini files.
  - **SVG (Scalable Vector Graphics)**: An XML-based vector image format for two-dimensional graphics with support for interactivity and animation. Example: .svg files.

- **Binary files**: These are files that contain binary data. They include:
  - **Data in binary format**: These files store data in a format that can be read directly by the computer. Example: .bin files.
  - **Images**: Files that store digital images. Example: .jpg, .png files.
  - **Audio**: Files that store sound information. Example: .mp3, .wav files.
  - **Video**: Files that store moving visual images. Example: .mp4, .avi files.

For more information, you can refer to the following resources:
- [List of file signatures in hex](https://en.wikipedia.org/wiki/List_of_file_signatures)
- [Unicode](https://home.unicode.org/)


## plain text
```
Mary River
2024

Report

This year 2024 will be the beginning of a new project.
Designers of the new project Mary River and Matt Jones
attended the lauch....
```

problem with plain text: Hard or impossible to handle programmarically

## structured text
```
Writer: Mary River
Year: 2024

Type: Report

This year 2024 will be the beginning of a new project.
Designers of the new project Mary River and Matt Jones
attended the lauch....
```


## JSON Format
```json
{
    "writer": {
        "firstname": "Mary",
        "lastname": "River"
        
    },
    "year": 2024,
    "type": "Report",
    "description": [
        "This year 2024 will be the beginning of a ",
        "new project.Designers of the new project ",
        "Mary River and Matt Jones attended the ",
        "launch of type:marketing"
    ]
}
```

