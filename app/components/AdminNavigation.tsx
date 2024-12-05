import Link from "next/link";
import BaseNavigation from "./BaseNavigation";

const AdminNavigation = () => {
  return (
    <BaseNavigation>
      <div className="hidden lg:flex flex-1 justify-start ml-8">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/admin/dashboard"
              className="hover:text-yellow-400 transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/egg-quality"
              className="hover:text-yellow-400 transition-colors"
            >
              Egg Quality Control
            </Link>
          </li>
          <li>
            <Link
              href="/admin/analytics"
              className="hover:text-yellow-400 transition-colors"
            >
              Analytics
            </Link>
          </li>
          <li>
            <Link
              href="/admin/settings"
              className="hover:text-yellow-400 transition-colors"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className="hover:text-yellow-400 transition-colors"
            >
              User Management
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end flex-1">
        <Link
          href="/admin/logout"
          className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
        >
          Logout
        </Link>
      </div>
    </BaseNavigation>
  );
};

export default AdminNavigation;
