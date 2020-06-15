# Crystalball
Crystalball is a Crystal ball that tell you the best.

## Installation

```bash
npm install crystalball
```

## Usage

```javascript
import crystalball

crystalball() # returns 'Something'
```

## Example

```javascript
import crystalball

  const [value, setValue] = React.useState("")

  const crystalballfunc = () => {
    setValue(crystalball())
  }

  <p className="description">
    <button type="button" className="btn btn-primary" onClick={crystalballfunc}>Tell me something!</button>
  </p>

  {value && <div className="card border-primary mb-3">
    <div className="card-body text-primary">
      <p className="card-text">{value}</p>
    </div>
  </div>}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)