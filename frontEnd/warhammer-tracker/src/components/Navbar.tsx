export default function Nav(){
    
return(
    <div className=" w-full">
        <ul className="flex justify-end gap-6 p-4 bg-gray-800 text-white">
            <li className="cursor-pointer">Log in</li> {/* Make these into buttons later */}
            <li className="cursor-pointer">Sign up</li>
        </ul>
    </div>
)
}