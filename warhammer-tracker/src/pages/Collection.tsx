export default function Collection(){
    return(
        <div>
            <div>
                <h2>My Collection</h2>
                <p>Overview of all miniatures owned</p>
                <div>
                    <h2>Progress</h2>
                    <p>Owned Models: *Total Number*</p>
                    <p>Models painted: *% of total owned*</p>
                    <p>Models unpainted: *Remaining %*</p>
                </div>
                <div>
                    <h2>Quick Stats</h2>
                    <p>Total armies owned</p>
                    <p>Favourite Faction</p>
                    <p>Days since last painting session</p>
                </div>
            </div>
            <div>
                <h2>Collection List</h2>
                <img src="https://www.adeptusars.com/wp-content/uploads/2023/06/Chaos-Lord-2024-Model.jpg"></img>
                <p>Model Name</p>
                <p>Faction</p>
                <p>Status: Painted/Unpainted/In Progress</p>
                <p>Notes:</p>
            </div>
            <div>
                <h2>Add New Model</h2>
                <form>
                    <label>Model Name:</label>
                    <input type="text" name="modelName"></input>
                    <label>Faction:</label>
                    <input type="text" name="faction"></input>
                    <label>Status:</label>
                    <select name="status">
                        <option value="painted">Painted</option>
                        <option value="unpainted">Unpainted</option>
                        <option value="inProgress">In Progress</option>
                    </select>
                    <label>Notes:</label>
                    <textarea name="notes"></textarea>
                    <button type="submit">Add Model</button>
                </form>
            </div>
        </div>
    )
}