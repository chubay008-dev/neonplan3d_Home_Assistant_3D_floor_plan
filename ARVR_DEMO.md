# NeonPlan 3D AR/VR Demo

This demo shows how to use the new AR/VR functionality added to NeonPlan 3D.

## Usage

The AR/VR manager is automatically initialized in the `FloorplanViewer` class. To access it:

```typescript
// In your component or service that has access to the viewer
const viewer = new FloorplanViewer(hostElement, options);

// Get the AR/VR button (lazy-created)
const xrButton = viewer.getXRButton();
if (xrButton) {
  document.body.appendChild(xrButton);
}

// Check current XR mode
console.log("Current XR mode:", viewer.getXRMode());

// Toggle AR mode
await viewer.toggleAR();

// Toggle VR mode  
await viewer.toggleVR();
```

## Features Implemented

1. **AR Mode** (`immersive-ar`):
   - Plane detection for placing the 3D model on real surfaces
   - Hit testing for furniture placement
   - Visual placement indicator (pulsing ring)
   - DOM overlay for HTML UI

2. **VR Mode** (`immersive-vr`):
   - Full immersion in the 3D model
   - Head tracking for looking around
   - Ready for controller input (future enhancement)

3. **Fallback Behavior**:
   - Graceful degradation if WebXR not supported
   - Button shows "AR/VR not supported" in that case
   - Normal 3D viewer continues to work

## Integration Points

- Added `XRManager` class in `src/viewer/xr.ts`
- Integrated into `FloorplanViewer` constructor in `src/viewer/viewer3d.ts`
- Added helper methods to `FloorplanViewer`:
  - `getXRButton()` - Returns the toggle button
  - `getXRMode()` - Returns current mode ("none" | "ar" | "vr")
  - `toggleAR()` - Starts/stops AR session
  - `toggleVR()` - Starts/stops VR session
- Automatic cleanup on viewer dispose

## Testing

Unit tests are in `src/viewer/xr.test.ts` covering:
- XRManager instantiation
- AR floor plane geometry creation
- VR reticle creation
- XRMode type validation

## Browser Support

Requires a browser with WebXR support:
- Chrome/Android (latest)
- Safari/iOS (with WebXR polyfill or experimental features)
- Firefox (with webxr flag enabled)
- Edge (latest)

## Future Enhancements

1. Controller input handling for VR
2. Hand tracking for more natural interaction
3. Persistent anchors for AR placement
4. Light estimation for better AR lighting matching
5. Depth API integration for occlusion
6. Multi-user AR/VR sessions