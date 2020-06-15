# mycrystalball
mycrystalball is a Crystal ball that tell you the best.

## Installation

```bash
npm install mycrystalball
```

## Usage

```javascript
import mycrystalball

mycrystalball() # returns 'Something'
```

## Example

```javascript
import mycrystalball

  const [value, setValue] = React.useState("")

  const mycrystalballfunc = () => {
    setValue(mycrystalball())
  }

  <p className="description">
    <button type="button" className="btn btn-primary" onClick={mycrystalballfunc}>Tell me something!</button>
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