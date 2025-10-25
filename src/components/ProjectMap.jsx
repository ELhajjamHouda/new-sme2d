'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap, Circle } from 'react-leaflet';
import L from 'leaflet';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Component to handle map events
function MapEvents({ onMapClick }) {
  useMapEvents({
    click: (e) => {
      if (onMapClick) {
        onMapClick(e.latlng.lat, e.latlng.lng);
      }
    },
  });
  return null;
}

// Component to handle map updates
function MapUpdater({ center, zoom }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  
  return null;
}

const ProjectMap = ({
  center = [32.4279, -6.8513],
  zoom = 6,
  projects = [],
  height = '500px',
  className = '',
  showUserLocation = false,
  onProjectClick,
  onMapClick,
  mapStyle = 'default'
}) => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Get user's current location
  useEffect(() => {
    if (showUserLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, [showUserLocation]);

  // Handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  // Handle map click
  const handleMapClick = (lat, lng) => {
    setSelectedProject(null);
    if (onMapClick) {
      onMapClick(lat, lng);
    }
  };

  // Get tile layer URL based on map style
  const getTileLayerUrl = () => {
    switch (mapStyle) {
      case 'satellite':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      case 'terrain':
        return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
      case 'dark':
        return 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
      default:
        return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    }
  };

  const getAttribution = () => {
    switch (mapStyle) {
      case 'satellite':
        return '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
      case 'terrain':
        return '&copy; <a href="https://opentopomap.org/">OpenTopoMap</a> &mdash; &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      case 'dark':
        return '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
      default:
        return '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    }
  };

  // Create custom marker icon with single static image
  const createProjectIcon = (project) => {
    const statusColors = {
      active: '#10b981',    // green
      completed: '#6b7280', // gray
      upcoming: '#f59e0b'   // yellow
    };

    const color = project.color || statusColors[project.status || 'active'];

    return L.divIcon({
      className: 'custom-project-marker',
      html: `
        <div style="
          background-color: ${color};
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        ">
          <img 
            src="/assets/img/icon/marker-icon.svg" 
            alt="Project Marker" 
            style="
              width: 24px;
              height: 24px;
              object-fit: contain;
              filter: brightness(0) invert(1);
            "
            onerror="
              this.src='/assets/img/icon/marker-icon.png';
              this.onerror=function(){
                this.style.display='none';
                this.nextElementSibling.style.display='flex';
              };
            "
          />
          <div style="
            display: none;
            width: 24px;
            height: 24px;
            background-color: white;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            color: ${color};
          ">P</div>
          <div style="
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            background: ${color};
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid ${color};
          "></div>
        </div>
      `,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });
  };

  // Get status badge styling
  const getStatusBadge = (status) => {
    const statusStyles = {
      active: 'bg-green-100 text-green-800 border-green-200',
      completed: 'bg-gray-100 text-gray-800 border-gray-200',
      upcoming: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    
    return statusStyles[status] || statusStyles.active;
  };

  return (
    <div className={`project-map-container ${className}`} style={{ height, width: '100%' }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <MapUpdater center={center} zoom={zoom} />
        <MapEvents onMapClick={handleMapClick} />
        
        {/* Tile Layer */}
        <TileLayer
          attribution={getAttribution()}
          url={getTileLayerUrl()}
        />
        
        {/* User Location Marker */}
        {userLocation && (
          <Circle
            center={userLocation}
            radius={100}
            pathOptions={{ color: 'blue', fillColor: 'lightblue', fillOpacity: 0.3 }}
          >
            <Popup>
              <div>
                <h3>Your Location</h3>
                <p>Lat: {userLocation[0].toFixed(4)}, Lng: {userLocation[1].toFixed(4)}</p>
              </div>
            </Popup>
          </Circle>
        )}
        
        {/* Project Markers */}
        {projects.map((project) => (
          <Marker
            key={project.id}
            position={project.position}
            icon={createProjectIcon(project)}
            eventHandlers={{
              click: () => handleProjectClick(project)
            }}
          >
            <Popup maxWidth={300} className="project-popup">
              <div className="project-popup-content">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusBadge(project.status || 'active')}`}>
                    {project.status || 'Active'}
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-600 mr-2">Project Type:</span>
                    <span className="text-sm text-gray-800 bg-gray-100 px-2 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                  
                  {project.description && (
                    <p className="text-sm text-gray-600 mb-3">
                      {project.description}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-500">
                    Click to view details
                  </span>
                  <Link 
                    href={project.pageUrl}
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => handleProjectClick(project)}
                  >
                    View Project
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Selected Project Info Panel */}
      {selectedProject && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-[1000] border">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">Selected Project</h4>
            <button 
              onClick={() => setSelectedProject(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Name:</span> {selectedProject.name}
            </p>
            <p className="text-sm">
              <span className="font-medium">Type:</span> {selectedProject.type}
            </p>
            <p className="text-sm">
              <span className="font-medium">Status:</span> 
              <span className={`ml-1 px-2 py-0.5 text-xs rounded-full ${getStatusBadge(selectedProject.status || 'active')}`}>
                {selectedProject.status || 'Active'}
              </span>
            </p>
            <Link 
              href={selectedProject.pageUrl}
              className="block w-full text-center mt-3 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Go to Project Page
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectMap;
